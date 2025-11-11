import * as React from "react";
import { Aluno as AlunoType } from "@/types/aluno";
import Indicators from "./Indicator/Indicators";
import GaugeChart from "./GaugeChart/GaugeChart";
import AtividadesChart from "./AtividadesChart/AtividadesChart";
import DadosPessoais from "./DadosPessoais/DadosPessoais";
import { Curso } from "@/types/curso";
import Grade from "./Grade";
import Header from "./header";

interface AlunoProps {
  curso: Curso;
  alunos: AlunoType[];
  student_id: number;
}

export default function Aluno({ curso, alunos, student_id }: AlunoProps) {
  const aluno = alunos.find(a => a.id === student_id);

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        <Header student_id={student_id} course={curso} />
        {/* <Indicators aluno={aluno} cursoSelecionado={curso.id} /> */}
        <Grade />
      </div>
    </div>
  );
}