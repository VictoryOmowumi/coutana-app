import { Users } from "./Data";

export const Posts = [
    {
        id: 1,
        user: Users[0].name,
        image: require("../assets/images/img-1.jpg"),
        likes: 123,
        caption: "Frazer Premium Shirt",
        edition: 100,
        profile: Users[0].image,
        comments: [
            {
                user: Users[1].name,
                comment: "This is a comment",
            },
            {
                user: Users[2].name,
                comment: "This is a comment",
            },
        ]
    },
    {
        id: 2,
        user: Users[1].name,
        image: require("../assets/images/img-2.jpg"),
        likes: 123,
        caption: "Frazer Premium Shirt",
        edition: 100,
        profile: Users[1].image,
        comments: [
            {
                user: Users[1].name,
                comment: "This is a comment",
            },
            {
                user: Users[2].name,
                comment: "This is a comment",
            },
        ]
    },
    {
        id: 3,
        user: Users[2].name,
        image: require("../assets/images/img-3.jpg"),
        likes: 123,
        caption: "Frazer Premium Shirt",
        edition: 100,
        profile: Users[2].image,
        comments: [
            {
                user: Users[1].name,
                comment: "This is a comment",
            },
            {
                user: Users[2].name,
                comment: "This is a comment",
            },
        ]
    },
    {
        id: 4,
        user: Users[3].name,
        image: require("../assets/images/img-4.jpg"),
        likes: 123,
        caption: "Frazer Premium Shirt",
        edition: 100,
        profile: Users[3].image,
        comments: [
            {
                user: Users[1].name,
                comment: "This is a comment",
            },
            {
                user: Users[2].name,
                comment: "This is a comment",
            },
        ]
    },
    {
        id: 5,
        user
        : Users[4].name,
        image: require("../assets/images/img-5.jpg"),
        likes: 123,
        caption: "Frazer Premium Shirt",
        edition: 100,
        profile: Users[4].image,
        comments: [
            {
                user: Users[1].name,
                comment: "This is a comment",
            },
            {
                user: Users[2].name,
                comment: "This is a comment",
            },
        ]
    },
    {
        id: 6,
        user
        : Users[5].name,
        image: require("../assets/images/img-6.jpg"),
        likes: 123,
        caption: "Frazer Premium Shirt",
        edition: 100,
        profile: Users[5].image,
        comments: [
            {
                user: Users[1].name,
                comment: "This is a comment",
            },
            {
                user: Users[2].name,
                comment: "This is a comment",
            },
        ]
    },
    
]