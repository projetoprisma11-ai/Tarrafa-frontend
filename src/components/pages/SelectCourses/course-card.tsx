import { Curso } from "@/types/curso";
import Link from "next/link";

interface CourseCardProps {
    course: Curso
    path: string
}

export default function CourseCard({ course, path }: CourseCardProps) {
    const card_color = (status: string | undefined):string => {
        if (status === "D"){
            return "w-full bg-[#5a6acf] text-white hover:bg-[#374DAA] hover:scale-105 transition-all flex flex-col rounded-xl border border-gray-400 p-2";
        }
        return "w-full bg-[#facc15] text-gray-900 hover:bg-[#eab308] hover:scale-105 transition-all flex flex-col rounded-xl border border-gray-400 p-2";
    }

    return (
        <Link href={`${path}${course.id}`} className={card_color(course.status)}>
            <h1>{course.fullname}</h1>
            <p>{course.shortname}-{course.period}</p>
        </Link>
    );
};
