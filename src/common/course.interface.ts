export interface Course {
    id: number;
    title: string;
    duration: number;
    date: number;
    description: string;
    edit: (title: string, duration: number, date: number, description: string) => Course;
    delete: (id: number) => void;
}
