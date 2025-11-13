export type Activity = {
    activity_name: string,
    grade_max: number,
    grade_real: number
}

export type FinalGrade = {
    grade: number,
    max: number
}

export type ApiResult = {
    activities: Activity[],
    final: FinalGrade
}