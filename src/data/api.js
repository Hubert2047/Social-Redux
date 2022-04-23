import { FaUserFriends, FaGamepad, FaTools, FaBell } from "react-icons/fa";
import {
    BsClockHistory,
    BsFillBookmarkStarFill,
    BsFillQuestionCircleFill,
    BsPhone,
    BsSuitHeartFill,
    BsTagsFill,
    BsShop,
    BsInbox
} from "react-icons/bs";
import { FcSportsMode } from "react-icons/fc";
import { GiPodiumWinner, GiFreedomDove, GiClothes } from "react-icons/gi";
import {
    MdOutlineEventAvailable,
    MdOutlineRssFeed,
    MdOndemandVideo,
    MdOutlinePets,
    MdLocalGroceryStore,
    MdSell
} from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineHome, AiFillHome, AiFillCar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { SiHomeassistantcommunitystore, SiFacebooklive } from "react-icons/si";
export const user = {
    userId: 1,
    avatar: 'assets/person/hubert.jpg',
    firstName: 'Wu',
    lastName: 'Hubert',
    posts: [{
            id: 1,
            userCreate: {
                userId: 1,
                avatar: 'assets/person/hubert.jpg',
                firstName: 'Wu',
                lastName: 'Hubert'
            },
            createAt: '2022-04-08T16:09:44.300Z',
            content: 'This is my team in a workshop ',
            img: 'assets/post/MBA.jpg',
            likeCount: 109,
            shareCount: 120,
            comments: [{
                    id: 1,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: " this picture so nice",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 2,
                    user: {
                        userId: 2,
                        avatar: 'assets/person/2.jpeg',
                        firstName: 'Alex',
                        lastName: 'huk'
                    },
                    isLiked: false,
                    content: " how are you",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 3,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: "Iam Fine !",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                },
                {
                    id: 4,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: "How about you ?",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                }

            ]
        },
        {
            id: 2,
            userCreate: {
                userId: 2,
                avatar: 'assets/person/2.jpeg',
                firstName: 'Alex',
                lastName: 'huk'
            },
            createAt: '2022-02-08T16:09:44.300Z',
            content: 'This is my team in a workshop ',
            img: 'assets/post/MBA-1.jpg',
            likeCount: 1119,
            commentCount: 3,
            shareCount: 1201,
            comments: [{
                    id: 1,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: " this picture so nice",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 2,
                    user: {
                        userId: 2,
                        avatar: 'assets/person/2.jpeg',
                        firstName: 'Alex',
                        lastName: 'huk'
                    },
                    isLiked: false,
                    content: " how are you",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 3,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: "Iam Fine !",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                }
            ]
        },
        {
            id: 3,
            userCreate: {
                userId: 5,
                avatar: 'assets/person/5.jpeg',
                firstName: 'Lina',
                lastName: 'Ron',
            },
            createAt: '2022-02-08T16:09:44.300Z',
            content: 'Sea so beutiful ',
            img: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.1.428537613.1649566608',
            likeCount: 1119,
            commentCount: 3,
            shareCount: 1201,
            comments: [{
                    id: 1,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: " this picture so nice",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 2,
                    user: {
                        userId: 2,
                        avatar: 'assets/person/2.jpeg',
                        firstName: 'Alex',
                        lastName: 'huk'
                    },
                    isLiked: false,
                    content: " how are you",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 3,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: "Iam Fine !",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                }
            ]
        },
        {
            id: 4,
            userCreate: {
                userId: 5,
                avatar: 'assets/person/5.jpeg',
                firstName: 'Lina',
                lastName: 'Ron',
            },
            createAt: '2022-02-08T16:09:44.300Z',
            content: 'Sea so beutiful ',
            img: 'https://img.freepik.com/free-photo/beautiful-hawaii-landscape-with-ocean_23-2149082947.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.1.428537613.1649566608',
            likeCount: 1119,
            commentCount: 3,
            shareCount: 1201,
            comments: [{
                    id: 1,
                    user: {
                        userId: 9,
                        avatar: 'assets/person/9.jpeg',
                        firstName: 'Anna',
                        lastName: 'Altenwerth',
                    },
                    isLiked: false,
                    content: " this picture so nice",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 2,
                    user: {
                        userId: 2,
                        avatar: 'assets/person/2.jpeg',
                        firstName: 'Alex',
                        lastName: 'huk'
                    },
                    isLiked: false,
                    content: " how are you",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 3,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: "Iam Fine !",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                }
            ]
        },
        {
            id: 5,
            userCreate: {
                userId: 10,
                avatar: 'assets/person/10.jpeg',
                firstName: 'Ismael',
                lastName: 'Anderson',
            },
            createAt: '2022-02-08T16:09:44.300Z',
            content: 'Sea so beutiful ',
            img: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.1.428537613.1649566608',
            likeCount: 1119,
            commentCount: 3,
            shareCount: 1201,
            comments: [{
                    id: 1,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: " this picture so nice",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 2,
                    user: {
                        userId: 2,
                        avatar: 'assets/person/2.jpeg',
                        firstName: 'Alex',
                        lastName: 'huk'
                    },
                    isLiked: false,
                    content: " how are you",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 3,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: "Iam Fine !",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                }
            ]
        },
        {
            id: 6,
            userCreate: {
                userId: 5,
                avatar: 'assets/person/5.jpeg',
                firstName: 'Lina',
                lastName: 'Ron',
            },
            createAt: '2022-02-08T16:09:44.300Z',
            content: 'Sea so beutiful ',
            img: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.1.428537613.1649566608',
            likeCount: 1119,
            commentCount: 3,
            shareCount: 1201,
            comments: [{
                    id: 1,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: " this picture so nice",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 2,
                    user: {
                        userId: 2,
                        avatar: 'assets/person/2.jpeg',
                        firstName: 'Alex',
                        lastName: 'huk'
                    },
                    isLiked: false,
                    content: " how are you",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 3,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: "Iam Fine !",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                }
            ]
        },
        {
            id: 7,
            userCreate: {
                userId: 5,
                avatar: 'assets/person/5.jpeg',
                firstName: 'Lina',
                lastName: 'Ron',
            },
            createAt: '2022-02-08T16:09:44.300Z',
            content: 'Sea so beutiful ',
            img: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.1.428537613.1649566608',
            likeCount: 1119,
            commentCount: 3,
            shareCount: 1201,
            comments: [{
                    id: 1,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: " this picture so nice",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 2,
                    user: {
                        userId: 2,
                        avatar: 'assets/person/2.jpeg',
                        firstName: 'Alex',
                        lastName: 'huk'
                    },
                    isLiked: false,
                    content: " how are you",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 3,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: "Iam Fine !",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                }
            ]
        },
        {
            id: 8,
            userCreate: {
                userId: 5,
                avatar: 'assets/person/5.jpeg',
                firstName: 'Lina',
                lastName: 'Ron',
            },
            createAt: '2022-02-08T16:09:44.300Z',
            content: 'Sea so beutiful ',
            img: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.1.428537613.1649566608',
            likeCount: 1119,
            commentCount: 3,
            shareCount: 1201,
            comments: [{
                    id: 1,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: " this picture so nice",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 2,
                    user: {
                        userId: 2,
                        avatar: 'assets/person/2.jpeg',
                        firstName: 'Alex',
                        lastName: 'huk'
                    },
                    isLiked: false,
                    content: " how are you",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 3,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    content: "Iam Fine !",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                }
            ]
        },
    ],
    stories: [{
            id: 1,
            createBy: {
                userId: 2,
                avatar: 'assets/person/2.jpeg',
                firstName: 'Alex',
                lastName: 'huk'
            },
            img: 'assets/stories/cartoon.jpg'
        },
        {
            id: 2,
            createBy: {
                userId: 3,
                avatar: 'assets/person/3.jpeg',
                firstName: 'Marry',
                lastName: 'Q'
            },
            img: 'assets/stories/flower.jpg'
        },
        {
            id: 3,
            createBy: {
                userId: 4,
                avatar: 'assets/person/4.jpeg',
                firstName: 'Alart',
                lastName: 'Rub'
            },
            img: 'assets/stories/mushroom.jpg'
        },
        {
            id: 4,
            createBy: {
                userId: 5,
                avatar: 'assets/person/5.jpeg',
                firstName: 'Lina',
                lastName: 'Ron'
            },
            img: 'assets/stories/hurbor.jpg'
        },
        {
            id: 5,
            createBy: {
                userId: 6,
                avatar: 'assets/person/6.jpeg',
                firstName: 'Robin',
                lastName: 'Chan'
            },
            img: 'assets/stories/ocean.jpg'
        },
        {
            id: 6,
            createBy: {
                userId: 8,
                avatar: 'assets/person/8.jpeg',
                firstName: 'Tania',
                lastName: 'Gerhold'
            },
            img: 'https://img.freepik.com/free-vector/thank-you-wedding-card_23-2148661845.jpg?size=626&ext=jpg&ga=GA1.2.49049126.1644569694'
        },
        {
            id: 7,
            createBy: {
                userId: 9,
                avatar: 'assets/person/9.jpeg',
                firstName: 'Anna',
                lastName: 'Altenwerth'
            },
            img: 'https://img.freepik.com/free-vector/identity-card-gradient-dynamic-template_23-2149213344.jpg?w=740'
        },
        {
            id: 8,
            createBy: {
                userId: 7,
                avatar: 'assets/person/7.jpeg',
                firstName: 'Cara',
                lastName: 'Keeling',
            },
            img: 'https://img.freepik.com/free-vector/fantasy-mushrooms-flowers-trees-alien-planet-magic-game-plants-isolated-set-unusual-nature-elements-fairy-tale-extraterrestrial-strange-flora-fauna-assets-cartoon-vector-illustration_107791-10918.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.2.428537613.1649566608'
        },
        {
            id: 9,
            createBy: {
                userId: 10,
                avatar: 'assets/person/10.jpeg',
                firstName: 'Ismael',
                lastName: 'Anderson'
            },
            img: 'https://img.freepik.com/free-vector/realistic-eid-al-fitr-illustration_23-2149351862.jpg?size=338&ext=jpg&uid=R64289318&ga=GA1.2.428537613.1649566608'
        }
    ],
    friends: [{
            userId: 2,
            avatar: 'assets/person/2.jpeg',
            firstName: 'Alex',
            lastName: 'huk',
            isOnline: true
        },
        {
            userId: 3,
            avatar: 'assets/person/3.jpeg',
            firstName: 'Marry',
            lastName: 'Q',
            isOnline: true

        },
        {

            userId: 4,
            avatar: 'assets/person/4.jpeg',
            firstName: 'Alart',
            lastName: 'Rub',
            isOnline: false

        },
        {

            userId: 5,
            avatar: 'assets/person/5.jpeg',
            firstName: 'Lina',
            lastName: 'Ron',
            isOnline: true

        },
        {

            userId: 6,
            avatar: 'assets/person/6.jpeg',
            firstName: 'Cordia',
            lastName: 'Prosacco',
            isOnline: true

        },
        {

            userId: 7,
            avatar: 'assets/person/7.jpeg',
            firstName: 'Cara',
            lastName: 'Keeling',
            isOnline: false

        },
        {

            userId: 8,
            avatar: 'assets/person/8.jpeg',
            firstName: 'Tania',
            lastName: 'Gerhold',
            isOnline: true

        },
        {

            userId: 9,
            avatar: 'assets/person/9.jpeg',
            firstName: 'Anna',
            lastName: 'Altenwerth',
            isOnline: true

        },
        {

            userId: 10,
            avatar: 'assets/person/10.jpeg',
            firstName: 'Ismael',
            lastName: 'Anderson',
            isOnline: true

        },
        {

            userId: 11,
            avatar: 'https://img.freepik.com/free-photo/horizontal-image-attractive-fashionable-retired-female-wearing-white-shirt-elegant-silk-scarf-daydreaming-home_344912-2203.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.2.428537613.1649566608',
            firstName: 'Annamae',
            lastName: 'Toy',
            isOnline: false

        },
        {

            userId: 12,
            avatar: 'https://img.freepik.com/free-photo/image-handsome-happy-guy-christmas-sweater-smiling-looking-camera-celebrating-xmas-holidays-standing-red-background_1258-63133.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.2.428537613.1649566608',
            firstName: 'Dangelo',
            lastName: 'Orn',
            isOnline: false

        },
        {

            userId: 13,
            avatar: 'https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-thoughtful-stylish-young-woman-smiling-pleased-dreaming-imaging-perfect-plan-have-interesting-idea-thinking-looking-upper-left-corner_1258-59348.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.2.428537613.1649566608',
            firstName: 'Jarred',
            lastName: 'Block',
            isOnline: false

        },
        {

            userId: 14,
            avatar: 'https://img.freepik.com/free-photo/image-modern-asian-woman-standing-park-smiling_197531-22520.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.2.428537613.1649566608',
            firstName: 'Jabari',
            lastName: 'Nikolaus',
            isOnline: false

        },
        {

            userId: 15,
            avatar: 'https://img.freepik.com/free-photo/young-man-arms-outstretched-by-sea-sunrise-enjoying-freedom-life-people-travel-wellbeing-concept_169160-15.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.2.428537613.1649566608',
            firstName: 'LiFletcher',
            lastName: 'McClure',
            isOnline: false

        },
        {

            userId: 16,
            avatar: 'https://img.freepik.com/free-photo/young-man-arms-outstretched-by-sea-sunrise-enjoying-freedom-life-people-travel-wellbeing-concept_169160-15.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.2.428537613.1649566608',
            firstName: 'LiFletcher',
            lastName: 'McClure',
            isOnline: false

        },
        {

            userId: 17,
            avatar: 'https://img.freepik.com/free-photo/young-man-arms-outstretched-by-sea-sunrise-enjoying-freedom-life-people-travel-wellbeing-concept_169160-15.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.2.428537613.1649566608',
            firstName: 'LiFletcher',
            lastName: 'McClure',
            isOnline: false

        },
        {

            userId: 18,
            avatar: 'https://img.freepik.com/free-photo/young-man-arms-outstretched-by-sea-sunrise-enjoying-freedom-life-people-travel-wellbeing-concept_169160-15.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.2.428537613.1649566608',
            firstName: 'LiFletcher',
            lastName: 'McClure',
            isOnline: false

        },
        {

            userId: 19,
            avatar: 'https://img.freepik.com/free-photo/young-man-arms-outstretched-by-sea-sunrise-enjoying-freedom-life-people-travel-wellbeing-concept_169160-15.jpg?size=626&ext=jpg&uid=R64289318&ga=GA1.2.428537613.1649566608',
            firstName: 'LiFletcher',
            lastName: 'McClure',
            isOnline: false

        }
    ],
    shortCuts: [{
            id: 1,
            avatar: 'assets/shortcut/youtube.png',
            name: 'Youtube'
        },
        {
            id: 2,
            avatar: 'assets/shortcut/battle.png',
            name: 'battle'
        }, {
            id: 3,
            avatar: 'assets/shortcut/gun.jpeg',
            name: 'Gun'
        }, {
            id: 4,
            avatar: 'assets/shortcut/avengers.jpeg',
            name: 'avengers'
        }, {
            id: 5,
            avatar: 'assets/shortcut/kidgetrid.jpeg',
            name: 'Kid Get Rich'
        }
    ],
    mesengers: [{
            id: 1,
            userSend: {

            },
            content: 'hello, how are you doing?',
            isRead: false,
        },
        {
            id: 2,
            userSend: {

            },
            content: 'we have a date, do you remember it ?',
            isRead: false,
        },
        {
            id: 3,
            userSend: {

            },
            content: 'we have a date, do you remember it ?',
            isRead: false,
        }
    ],
    requests: [{
            id: 1,
            userSend: {

            }
        },
        {
            id: 2,
            userSend: {

            }
        }
    ],
    notifications: [{
            id: 1,
            content: {

            }
        },
        {
            id: 2,
            content: {

            }
        }
    ]

}
export const navBtns = [{
        id: 1,
        icon: < AiOutlineHome className = "nav-icon" / > ,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        icon: < CgProfile className = "nav-icon" / > ,
        name: 'Profile',
        link: '/'
    },
    {
        id: 3,
        icon: < IoIosPeople className = "nav-icon" / > ,
        name: 'Group',
        link: '/'
    },
    {
        id: 4,
        icon: < MdOndemandVideo className = "nav-icon" / > ,
        name: 'Videos',
        link: '/'
    },
    {

        id: 5,
        icon: < SiHomeassistantcommunitystore className = "nav-icon" / > ,
        name: 'Marketplace',
        link: '/marketplace'
    }

]
export const sidebarHomeItems = [{
        id: 1,
        icon: < MdOutlineRssFeed className = "sidebar__icon" / > ,
        name: 'Feed'
    },
    {
        id: 2,
        icon: < FaUserFriends className = "sidebar__icon" / > ,
        name: 'Friends'

    },
    {
        id: 3,
        icon: < GiPodiumWinner className = "sidebar__icon" / > ,
        name: 'Courses'

    },
    {
        id: 4,
        icon: < BsFillBookmarkStarFill className = "sidebar__icon" / > ,
        name: 'Bookmarks'

    },
    {
        id: 5,
        icon: < AiFillHome className = "sidebar__icon" / > ,
        name: 'Marketplace'

    },
    {
        id: 6,
        icon: < BsClockHistory className = "sidebar__icon" / > ,
        name: 'Memories'

    },
    {
        id: 7,
        icon: < FaGamepad className = "sidebar__icon" / > ,
        name: 'Play Game'

    },
    {
        id: 8,
        icon: < BsFillQuestionCircleFill className = "sidebar__icon" / > ,
        name: 'Questions'

    },
    {
        id: 9,
        icon: < MdOutlineEventAvailable className = "sidebar__icon" / > ,
        name: 'Event'

    }
]
export const sidebarMarketplaceCategoriesBtn = [{
        id: 1,
        icon: < BsPhone className = "sidebar__icon" / > ,
        name: 'Electronics'
    },
    {
        id: 2,
        icon: < BsSuitHeartFill className = "sidebar__icon" / > ,
        name: 'Family'

    },
    {
        id: 3,
        icon: < MdOutlinePets className = "sidebar__icon" / > ,
        name: 'Pet'

    },
    {
        id: 4,
        icon: < FcSportsMode className = "sidebar__icon" / > ,
        name: 'Sporting Goods'

    },
    {
        id: 5,
        icon: < FaGamepad className = "sidebar__icon" / > ,
        name: 'Toys & Games'

    },
    {
        id: 6,
        icon: < FaTools className = "sidebar__icon" / > ,
        name: 'Home Improvement Supplies'

    },
    {
        id: 7,
        icon: < GiFreedomDove className = "sidebar__icon" / > ,
        name: 'Free Stuff'

    },
    {
        id: 8,
        icon: < BsTagsFill className = "sidebar__icon" / > ,
        name: 'Office Supplies'

    },
    {
        id: 9,
        icon: < AiFillCar className = "sidebar__icon" / > ,
        name: 'Vehicles '

    },
    {
        id: 10,
        icon: < GiClothes className = "sidebar__icon" / > ,
        name: 'Apparel '

    },
    {
        id: 11,
        icon: < HiUserGroup className = "sidebar__icon" / > ,
        name: 'Buy and sell groups'

    }
]
export const sidebarMarketplaceNavBtn = [{
        id: 1,
        icon: < BsShop className = "sidebar__icon" / > ,
        name: 'Browse all'
    },
    {
        id: 2,
        icon: < SiFacebooklive className = "sidebar__icon" / > ,
        name: 'Live Shopping'

    },
    {
        id: 3,
        icon: < FaBell className = "sidebar__icon" / > ,
        name: 'Notifications'

    },
    {
        id: 4,
        icon: < BsInbox className = "sidebar__icon" / > ,
        name: 'Inbox'

    },
    {
        id: 5,
        icon: < MdLocalGroceryStore className = "sidebar__icon" / > ,
        name: 'Buying'

    },
    {
        id: 6,
        icon: < MdSell className = "sidebar__icon" / > ,
        name: 'Selling'

    }
]
export const categoryProducts = [{
        id: 1,
        title: `Today's picks`,
        address: '新北市',
        products: [{
                id: 1,
                img: 'https://cs-f.ecimg.tw/items/DCACXWA900B9RR4/000001_1624098190.jpg',
                price: 100,
                name: '真正4K高畫質 HDMI線  2.0 版 影音傳輸線 公對公 投影機 電視 電腦 線材 轉接 連接(5 M)',
                address: 'taiwan'
            },
            {
                id: 2,
                img: 'https://cs-d.ecimg.tw/items/DYAZ12A900BNCBE/000001_1628578043.jpg',
                price: 409,
                name: '【防偷窺鋼化膜】iPhone 13 Pro Max 保護貼 i13 Pro Max 玻璃貼 未滿版 鋼化膜 防窺片',
                address: 'taiwan'
            },
            {
                id: 3,
                img: 'https://cs-d.ecimg.tw/items/DYAQF4A900D1DF4/000001_1641981190.jpg',
                price: 100,
                name: '【 AIWA 日本愛華 】真無線藍芽耳機 AT-X80J',
                address: 'taiwan'
            },
            {
                id: 4,
                img: 'https://cs-e.ecimg.tw/items/DRAEC4A900AS2CL/000001_1604027800.jpg',
                price: 1999,
                name: 'MONTECH(君主) Air X (黑) 內含ARGB風扇20cm*2+12cm*1/鋼化玻璃/E-ATX 電腦機殼',
                address: 'taiwan'
            }
        ],
    },
    {
        id: 2,
        title: `Electronics`,
        address: '台北市',
        products: [{
                id: 1,
                img: 'https://cs-d.ecimg.tw/items/DMAFNDA900EO68T/000001_1646817827.jpg',
                price: 3900,
                name: 'SE ELECTRONICS V7 BLACK 動圈式麥克風',
                address: 'taiwan'
            },
            {
                id: 2,
                img: 'https://cs-c.ecimg.tw/items/DJBQ3HD900DAX79/000001_1642097399.jpg',
                price: 3172,
                name: 'Power Electronics in Renewable Energy Systems and Smart Grid(Kobo/電子書)',
                address: 'taiwan'
            }, {
                id: 3,
                img: 'https://cs-d.ecimg.tw/items/DJBQ3HD900CM62S/000001_1641726770.jpg',
                price: 2100,
                name: 'SE ELECTRONICS V7 BLACK 動圈式麥克風',
                address: 'taiwan'
            }, {
                id: 4,
                img: 'https://cs-c.ecimg.tw/items/DJBQ3HD900CCHI6/000001_1641499048.jpg',
                price: 3500,
                name: 'SE ELECTRONICS V7 BLACK 動圈式麥克風',
                address: 'taiwan'
            }
        ],
    }
]