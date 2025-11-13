import * as React from "react";
import Indicators from "./Indicator/Indicators";
import { Curso } from "@/types/curso";
import Grade from "./Grade";
import Header from "./header";

interface AlunoProps {
  curso: Curso;
  student_id: number;
}

export default function Aluno({ curso, student_id }: AlunoProps) {
  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        <Header student_id={student_id} course={curso} />
        <Indicators student_id={student_id} course_id={curso.id} />
        <Grade student_id={student_id} course_id={curso.id} />
      </div>
    </div>
  );
}