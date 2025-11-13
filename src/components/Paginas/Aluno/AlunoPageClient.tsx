'use client';

import Aluno from '@/components/Paginas/Aluno/Aluno';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import { Curso } from '@/types/curso';

interface AlunoPageClientProps {
    student_id: number,
    course: Curso,
    courses: Curso[]
}

export default function AlunoPageClient({ student_id, course, courses }: AlunoPageClientProps) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header
                    id={course.id}
                    cursos={courses}
                />
                <main>
                    <Aluno
                        curso={course}
                        student_id={student_id} />
                </main>
            </div>
        </div>
    );
}