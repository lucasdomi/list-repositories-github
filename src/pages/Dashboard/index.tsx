import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/19497199?s=460&u=0ca2d29d37251e31cc0853ace54e26bd307f4431&v=4"
            alt="Lucas Domingues"
          />

          <div>
            <strong>lucas/teste</strong>
            <p>repositório de teste na aplicação</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/19497199?s=460&u=0ca2d29d37251e31cc0853ace54e26bd307f4431&v=4"
            alt="Lucas Domingues"
          />

          <div>
            <strong>lucas/teste</strong>
            <p>repositório de teste na aplicação</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
