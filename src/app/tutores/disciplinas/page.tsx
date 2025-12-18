import SelectCourse from "@/components/Paginas/SelectCourses/select-course";
import { getCourses } from "@/utils/api";

export default async function CursoTutoresPage() {
    const cursos = await getCourses()

    return <SelectCourse path='/tutores/disciplinas/' courses={cursos} />;
}
