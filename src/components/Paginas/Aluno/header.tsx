import { Aluno } from "@/types/aluno";
import { Curso } from "@/types/curso";
import { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais/DadosPessoais";
import { api } from "@/utils/api";
import { useError } from "@/hooks/useError";

interface HeaderProps {
    course: Curso
    student_id: number
}

export default function Header({ course, student_id }: HeaderProps) {
    const [student, setStudent] = useState<Aluno | null>(null);
    const error = useError();

    useEffect(() => {
        const fetch = async () => {
            try {
                error.clear()
                const response = await api.get(`/analysis/subject/${course.id}/student/${student_id}/summary`)
                setStudent(response.data.data.student_summary)
            } catch (err) {
                error.setError("Erro ao buscar dados gerais")
                console.error("Erro ao buscar dados gerais: ", err)
            }
        };
        fetch()
    }, [student_id])

    return (
        <>
            <div className="flex flex-row justify-between items-start w-full mb-4">
                <div className="flex flex-col items-start">
                    <div>
                        <h1 className="text-xl font-semibold text-left">
                            {student?.name}
                        </h1>
                        <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
                            {course.fullname}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-sm text-right">{course.period}</p>
                    <p className="text-xl text-right font-semibold">{course.shortname}</p>
                </div>
            </div>
            <DadosPessoais student={student} />
        </>
    );
};
