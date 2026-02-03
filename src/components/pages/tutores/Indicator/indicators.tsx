import Link from "next/link";
import styles from './Indicators.module.css';
import chat from "./chat.png";
import click from "./click.png";
import response from "./response.png";
import Image from 'next/image';
import { Tooltip } from "@/components/template/tooltip";
import { getIndicatorsInfo } from "@/utils/indicatorsInfo";
import { useEffect, useState } from "react";
import { useError } from "@/hooks/useError";
import { api } from "@/utils/api";
import Loading from "@/components/ui/loading";
import Button from "@/components/ui/button";

type PercentualInfo = {
  access: {
    good_percentage: number
  },
  feedback: {
    good_percentage: number
  },
  forum_response: {
    good_percentage: number
  }
}

export default function Indicators() {
  const [data, setData] = useState<PercentualInfo | null>(null)
  const error = useError()

  useEffect(() => {
    async function fetch() {
      try {
        error.clear()
        const response = await api.get(`analysis/tutors/general/indicators`)
        setData(response.data.data)
      } catch (err) {
        error.setError("Erro ao buscar indicadores")
        console.error("Erro ao buscar indicadores: ", err)
      }
    };
    fetch();
  }, [error.clear, error.setError]);

  return (
    <div className="Box pb-5">
      <div className="maincurso">
        <div className="mt-10 ml-10 mb-5">
          <h1 className="text-xl font-poppins font-semibold text-left">Indicadores Pedagógicos</h1>
          <p style={{ color: "#9291A5" }}>calculados</p>
        </div>
        <div className="m-10 flex gap-2">
          {/* <Button href='/#' >Detalhes</Button> */}
          <Button href='/tutores/curso'>Ver mais</Button>
        </div>
      </div>

      <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />

      {data ? (
        <>
          <div className={styles.BoxCentralizarIndicadores}>
            <div className={styles.EspacarIndicadores}>
              <div className="relative quadrado bg-[#C3D8FF]">
                {data.forum_response.good_percentage >= 0 ? (
                  <div className="flex flex-col w-full justify-between ">
                    <div className="ml-5 flex justify-start space-x-3">
                      <div className="bg-[#3C56D8] rounded-full flex items-center justify-center w-8 h-8">
                        <Image
                          src={chat}
                          alt="Ícone aluno-professor"
                          width={15}
                          height={20}
                          className="object-cover"
                        />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        {data.forum_response.good_percentage.toLocaleString(
                          "pt-BR",
                        )}
                        %
                      </p>
                    </div>

                    <div className="ml-17 flex text-left">
                      <div className="flex flex-col leading-snug">
                        <p className={styles.textoPersonalizado2}>de disciplinas</p>
                        <p className={styles.textoPersonalizado}>
                          com ótimo índice de respostas em fóruns
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col w-full justify-between ">
                    <div className="ml-5 flex justify-start space-x-3">
                      <p className="text-2xl font-bold text-gray-900">
                        Sem informações de mensagens processadas
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute h-full top-0 right-0 pt-3 pr-3 text-md">
                  <Tooltip message={getIndicatorsInfo.responseInfo} />
                </div>
              </div>

              <div className="relative quadrado bg-[#D0C3FF]">
                {data.access.good_percentage >= 0 ? (
                  <div className="flex flex-col w-full justify-between ">
                    <div className="ml-5 flex justify-start space-x-3">
                      <div className="bg-[#5C3CD8] rounded-full flex items-center justify-center w-8 h-8">
                        <Image
                          src={click}
                          alt="Ícone aluno-professor"
                          width={20}
                          height={28}
                          className="object-cover text-white"
                        />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        {data.access.good_percentage.toLocaleString("pt-BR")}%
                      </p>
                    </div>

                    <div className="ml-17 flex text-left">
                      <div className="flex flex-col leading-snug">
                        <p className={styles.textoPersonalizado2}>de disciplinas</p>
                        <p className={styles.textoPersonalizado}>
                          com bom índice de acesso à plataforma
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col w-full justify-between ">
                    <div className="ml-5 flex justify-start space-x-3">
                      <p className="text-2xl font-bold text-gray-900">
                        Sem informações de acesso processadas
                      </p>
                    </div>
                  </div>
                )}
                <div className="absolute h-full top-0 right-0 pt-3 pr-3 text-md">
                  <Tooltip message={getIndicatorsInfo.accessInfo} />
                </div>
              </div>

              <div className="relative quadrado bg-[#FFD8E2]">
                {data.feedback.good_percentage >= 0 ? (
                  <div className="flex flex-col w-full justify-between ">
                  <div className="ml-5 flex justify-start space-x-3">
                    <div className="bg-[#D83C8C] rounded-full flex items-center justify-center w-8 h-8">
                      <Image
                        src={response}
                        alt="Ícone aluno-professor"
                        width={15}
                        height={20}
                        className="object-cover text-white"
                      />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                      {data.feedback.good_percentage.toLocaleString("pt-BR")}%
                    </p>
                  </div>

                  <div className="ml-17 flex text-left">
                    <div className="flex flex-col leading-snug">
                      <p className={styles.textoPersonalizado2}>de disciplinas</p>
                      <p className={styles.textoPersonalizado}>
                        com bom índice de feedback
                      </p>
                    </div>
                  </div>
                </div>
                ) : (
                  <div className="flex flex-col w-full justify-between ">
                    <div className="ml-5 flex justify-start space-x-3">
                      <p className="text-2xl font-bold text-gray-900">
                        Sem informações de feedback processadas
                      </p>
                    </div>
                  </div>
                )}

                
                <div className="absolute h-full top-0 right-0 pt-3 pr-3 text-md">
                  <Tooltip message={getIndicatorsInfo.feedbackInfo} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : error.hasError ? (
        <div className="m-13">{error.renderError()}</div>
      ) : (
        <div className="m-13">
          <Loading>Buscando dados</Loading>
        </div>
      )}
    </div>
  );
}
