import AlunoPageClient from '@/components/Paginas/Aluno/AlunoPageClient';
import NotFound from '@/components/Paginas/global/not-found';
import { getCourses } from '@/utils/api';

interface PageProps {
  params: Promise<{
    id: string
    student_id: string
  }>
}

export default async function Page({ params }: PageProps) {
  const page_param = await params
  const cursos = await getCourses()
  const courseId = parseInt(page_param.id, 10)
  const studentId = parseInt(page_param.student_id, 10)

  if (isNaN(courseId) || isNaN(studentId)) {
    return (
      <NotFound cursos={cursos}>
        <div className="flex-1 flex justify-center items-center pt-4 pl-[240px]">
          <p>IDs inválidos! Por favor, verifique os parâmetros da URL.</p>
        </div>
      </NotFound>
    )
  }

  const curso = cursos.filter(curso => curso.id === courseId)[0]

  if (!curso) {
    return (
      <NotFound cursos={cursos}>
        <div className="flex-1 flex justify-center items-center pt-4 pl-[240px]">
          <p>Curso {courseId} não encontrado! Por favor, use o menu no canto superior esquerdo, ou tente novamente mais tarde!</p>
        </div>
      </NotFound>
    )
  }

  return <AlunoPageClient courses={cursos} course={curso} student_id={studentId} />;
}
