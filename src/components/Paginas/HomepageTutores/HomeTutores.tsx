import Indicators from './Indicator/Indicators';
import Ranking_Mais_Ativos from './Ranking_Mais_Ativos/Ranking_Mais_Ativos';
import Ranking_Menos_Ativos from './Ranking_Menos_Ativos/Ranking_Menos_Ativos';
import DadosGerais from './DadosGerais/DadosGerais';

export default function HomeTutores() {

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        <div className="flex flex-row justify-between items-start w-full mb-10">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-poppins font-semibold text-left">Visão Geral</h1>
              <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
              da Instituição
              </p>
          </div>
        </div>
        <div>
            <div className="center-wrapper flex flex-col justify-between">
              <DadosGerais />
              <Indicators  />
              <div className="flex flex-row space-x-3">
                <Ranking_Mais_Ativos />
                <Ranking_Menos_Ativos  />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
