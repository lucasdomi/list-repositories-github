import React, { useState, FormEvent, useEffect, useContext } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Title, Form, Repositories, Error, ContainerLogo } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { useTheme } from '../../hooks/color';

import { useLoading } from '../../hooks/loading';
import Loading from '../../components/Loading';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const { setTheme } = useTheme();
  const { currentLoading, setLoading } = useLoading();
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@ListGitHub:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@ListGitHub:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o nome do repositório');
      return;
    }

    try {
      setLoading(true);
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
      setLoading(false);
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  if (currentLoading) {
    return <Loading />;
  }

  return (
    <>
      <ContainerLogo>
        <img src={logoImg} alt="Github Explorer" />
        <Switch
          onChange={setTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor="#1a1a2e"
          onColor="#fff"
        />
      </ContainerLogo>
      <Title>Explore repositórios no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
