import Link from "next/link";
import styles from './Indicators.module.css';
import { Tooltip } from "@/components/template/tooltip";
import { getIndicatorsInfo } from "@/utils/indicatorsInfo";
import Button from "@/components/ui/button";
import { MdForum, MdMessage } from "react-icons/md";
import { HiCursorClick } from "react-icons/hi";

export default function Indicators() {
  return (
    <div className="Box mt-10 pb-5">
      <div className="maincurso">
        <div className="mt-10 ml-10 mb-5">
          <h1 className="text-xl font-poppins font-semibold text-left">Indicadores Pedagógicos</h1>
          <p style={{ color: "#9291A5" }}>calculados</p>
        </div>
        <div className="m-10 flex space-x-2 justify-end">
          <Button href='/tutores'>Detalhes</Button>
          <Button href='/tutores'>Ver mais</Button>
        </div>
      </div>

      <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />

      <div className={styles.BoxCentralizarIndicadores}>
        <div className={styles.EspacarIndicadores}>
          <div className="relative quadrado bg-[#C3D8FF]">
            <div className="flex flex-col w-full justify-between ">
              <div className="ml-8 flex justify-start space-x-3">
                <div className="bg-[#3C56D8] rounded-full flex items-center justify-center w-8 h-8">
                  <MdForum size="18" className="text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900">55%</p>
              </div>

              <div className="ml-19 flex text-left">
                <div className="flex flex-col leading-snug">
                  <p className={styles.textoPersonalizado2}>de disciplinas</p>
                  <p className={styles.textoPersonalizado}>com bom índice de<br />respostas em fóruns</p>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 right-0 pt-3 pr-3 text-md">
              <Tooltip message={getIndicatorsInfo.interacaoNaoAvaliativaInfo} />
            </div>
          </div>

          <div className="relative quadrado bg-[#D0C3FF]">
            <div className="flex flex-col w-full justify-between ">
              <div className="ml-8 flex justify-start space-x-3">
                <div className="bg-[#5C3CD8] rounded-full flex items-center justify-center w-8 h-8">
                  <HiCursorClick size="18" className="text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900">55%</p>
              </div>
              <div className="ml-19 flex text-left">
                <div className="flex flex-col leading-snug">
                  <p className={styles.textoPersonalizado2}>de disciplinas</p>
                  <p className={styles.textoPersonalizado}>com bom índice de<br />acesso a plataforma</p>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 right-0 pt-3 pr-3 text-md">
              <Tooltip message={getIndicatorsInfo.relacaoAlunoProfInfo} />
            </div>
          </div>

          <div className="relative quadrado bg-[#FFD8E2]">
            <div className="flex flex-col w-full justify-between">
              <div className="ml-8 flex justify-start space-x-3">
                <div className="bg-[#D83C8C] rounded-full flex items-center justify-center w-8 h-8">
                  <MdMessage size="18" className="text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900">2%</p>
              </div>
              <div className="ml-19 flex text-left">
                <div className="flex flex-col leading-snug">
                  <p className={styles.textoPersonalizado2}>de tutores</p>
                  <p className={styles.textoPersonalizado}>com bom índice de <br />troca de mensagens</p>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 right-0 pt-3 pr-3 text-md">
              <Tooltip message={getIndicatorsInfo.desistenciaInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
