import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/19497199?s=460&u=0ca2d29d37251e31cc0853ace54e26bd307f4431&v=4"
            alt="Lucas Domingues"
          />
          <div>
            <strong>nome</strong>
            <p>descricao</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>10</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>10</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>10</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asasda">
          <div>
            <strong>asdfsad</strong>
            <p>adsfasdf</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
