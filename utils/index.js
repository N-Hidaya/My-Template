import { compareDesc, parseISO } from "date-fns"

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

//sort blogs by date descending order
export const sortBlogs = (blogs) => {
    return blogs.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};