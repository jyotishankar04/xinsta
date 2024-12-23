import { IPost } from "@/types/types";

export const posts: IPost[] = [
  {
    id: 1,
    image: [
      "https://images.pexels.com/photos/9489933/pexels-photo-9489933.jpeg",
      "https://images.pexels.com/photos/19373148/pexels-photo-19373148.jpeg",
    ],
    description: "Sample description for post 1",
    likes: 45,
    comments: 3,
    shares: 12,
    isLiked: true,
    isBookmarked: false,
    commentsData: [
      {
        id: 1,
        postId: 1,
        author: {
          id: 1,
          name: "John Doe",
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        content: "Great post! Loved the idea behind it.",
        createdAt: new Date(),
        likes: 5,
        isLiked: true,
        replyCount: 1,
      },
      {
        id: 2,
        postId: 1,
        author: {
          id: 2,
          name: "Jane Smith",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        content: "I totally agree with you, this is amazing.",
        createdAt: new Date(),
        likes: 8,
        isLiked: false,
        replyCount: 0,
      },
      {
        id: 3,
        postId: 1,
        author: {
          id: 3,
          name: "Mike Lee",
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        content:
          "This is very insightful. Looking forward to more posts like this.",
        createdAt: new Date(),
        likes: 3,
        isLiked: true,
        replyCount: 0,
      },
    ],
  },
  {
    id: 2,
    image: [
      "https://images.pexels.com/photos/19373148/pexels-photo-19373148.jpeg",
      "https://images.pexels.com/photos/9489933/pexels-photo-9489933.jpeg",
    ],
    description: "Sample description for post 2",
    likes: 23,
    comments: 2,
    shares: 5,
    isLiked: false,
    isBookmarked: true,
    commentsData: [
      {
        id: 1,
        postId: 2,
        author: {
          id: 4,
          name: "Emily Johnson",
          avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        content: "This post really got me thinking. Nice work!",
        createdAt: new Date(),
        likes: 6,
        isLiked: false,
        replyCount: 2,
      },
      {
        id: 2,
        postId: 2,
        author: {
          id: 5,
          name: "Chris Brown",
          avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        content: "Great perspective, I might implement this idea.",
        createdAt: new Date(),
        likes: 4,
        isLiked: true,
        replyCount: 1,
      },
    ],
  },
  {
    id: 3,
    image: [
      "https://images.pexels.com/photos/18320670/pexels-photo-18320670.jpeg",
    ],
    description: "Sample description for post 3",
    likes: 55,
    comments: 4,
    shares: 18,
    isLiked: true,
    isBookmarked: true,
    commentsData: [
      {
        id: 1,
        postId: 3,
        author: {
          id: 6,
          name: "Alex Kim",
          avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        },
        content: "Awesome post, definitely saving this one!",
        createdAt: new Date(),
        likes: 9,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 2,
        postId: 3,
        author: {
          id: 7,
          name: "Sophia Lee",
          avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        },
        content: "I have tried something similar and it worked great.",
        createdAt: new Date(),
        likes: 5,
        isLiked: false,
        replyCount: 1,
      },
      {
        id: 3,
        postId: 3,
        author: {
          id: 8,
          name: "Luke Sky",
          avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        },
        content: "Can't wait to try this out. Thanks for sharing!",
        createdAt: new Date(),
        likes: 7,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 4,
        postId: 3,
        author: {
          id: 9,
          name: "Olivia Martin",
          avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        },
        content: "This is a game changer. Appreciate the post!",
        createdAt: new Date(),
        likes: 6,
        isLiked: false,
        replyCount: 0,
      },
    ],
  },
  {
    id: 4,
    image: [
      "https://images.pexels.com/photos/16876734/pexels-photo-16876734.jpeg",
    ],
    description: "Sample description for post 4",
    likes: 30,
    comments: 2,
    shares: 8,
    isLiked: false,
    isBookmarked: false,
    commentsData: [
      {
        id: 1,
        postId: 4,
        author: {
          id: 10,
          name: "Noah Evans",
          avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        },
        content: "This looks great, but I would add a few more details.",
        createdAt: new Date(),
        likes: 4,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 2,
        postId: 4,
        author: {
          id: 11,
          name: "Ava Clark",
          avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        },
        content: "I would love to know more about this process.",
        createdAt: new Date(),
        likes: 3,
        isLiked: false,
        replyCount: 1,
      },
    ],
  },
  {
    id: 5,
    image: [
      "https://images.pexels.com/photos/6258306/pexels-photo-6258306.jpeg",
    ],
    description: "Sample description for post 5",
    likes: 60,
    comments: 5,
    shares: 20,
    isLiked: true,
    isBookmarked: false,
    commentsData: [
      {
        id: 1,
        postId: 5,
        author: {
          id: 12,
          name: "David Wilson",
          avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        },
        content: "This is fantastic, I need to try this technique.",
        createdAt: new Date(),
        likes: 12,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 2,
        postId: 5,
        author: {
          id: 13,
          name: "Charlotte White",
          avatar: "https://randomuser.me/api/portraits/women/13.jpg",
        },
        content: "This was a game changer for my project!",
        createdAt: new Date(),
        likes: 7,
        isLiked: false,
        replyCount: 1,
      },
      {
        id: 3,
        postId: 5,
        author: {
          id: 14,
          name: "Ethan Adams",
          avatar: "https://randomuser.me/api/portraits/men/14.jpg",
        },
        content: "Thank you for sharing this, looking forward to more posts.",
        createdAt: new Date(),
        likes: 6,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 4,
        postId: 5,
        author: {
          id: 15,
          name: "Mia Davis",
          avatar: "https://randomuser.me/api/portraits/women/15.jpg",
        },
        content: "Amazing post, I learned a lot from it.",
        createdAt: new Date(),
        likes: 5,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 5,
        postId: 5,
        author: {
          id: 16,
          name: "James Garcia",
          avatar: "https://randomuser.me/api/portraits/men/16.jpg",
        },
        content: "Really helpful, I implemented the idea immediately.",
        createdAt: new Date(),
        likes: 8,
        isLiked: false,
        replyCount: 2,
      },
    ],
  },
  {
    id: 6,
    image: [
      "https://images.pexels.com/photos/1181312/pexels-photo-1181312.jpeg",
    ],
    description: "Sample description for post 6",
    likes: 28,
    comments: 4,
    shares: 9,
    isLiked: true,
    isBookmarked: false,
    commentsData: [
      {
        id: 1,
        postId: 6,
        author: {
          id: 17,
          name: "Lily Harris",
          avatar: "https://randomuser.me/api/portraits/women/17.jpg",
        },
        content: "Incredible post! I can relate to this a lot.",
        createdAt: new Date(),
        likes: 7,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 2,
        postId: 6,
        author: {
          id: 18,
          name: "Matthew Perez",
          avatar: "https://randomuser.me/api/portraits/men/18.jpg",
        },
        content: "I agree with the approach shown here. Well done!",
        createdAt: new Date(),
        likes: 5,
        isLiked: false,
        replyCount: 1,
      },
      {
        id: 3,
        postId: 6,
        author: {
          id: 19,
          name: "Isabella Johnson",
          avatar: "https://randomuser.me/api/portraits/women/19.jpg",
        },
        content: "This is exactly what I needed today. Thanks!",
        createdAt: new Date(),
        likes: 4,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 4,
        postId: 6,
        author: {
          id: 20,
          name: "David Williams",
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        },
        content: "Looking forward to seeing more posts like this one.",
        createdAt: new Date(),
        likes: 6,
        isLiked: true,
        replyCount: 0,
      },
    ],
  },
  {
    id: 7,
    image: [
      "https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg",
    ],
    description: "Sample description for post 7",
    likes: 34,
    comments: 3,
    shares: 7,
    isLiked: false,
    isBookmarked: true,
    commentsData: [
      {
        id: 1,
        postId: 7,
        author: {
          id: 21,
          name: "Liam Martinez",
          avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        },
        content: "This perspective is refreshing, thanks for sharing.",
        createdAt: new Date(),
        likes: 5,
        isLiked: true,
        replyCount: 1,
      },
      {
        id: 2,
        postId: 7,
        author: {
          id: 22,
          name: "Sophia Taylor",
          avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        },
        content: "This post made me think about my own work processes.",
        createdAt: new Date(),
        likes: 6,
        isLiked: false,
        replyCount: 0,
      },
      {
        id: 3,
        postId: 7,
        author: {
          id: 23,
          name: "Lucas Scott",
          avatar: "https://randomuser.me/api/portraits/men/23.jpg",
        },
        content: "I'm going to try this approach, looks great!",
        createdAt: new Date(),
        likes: 7,
        isLiked: true,
        replyCount: 0,
      },
    ],
  },
  {
    id: 8,
    image: [
      "https://images.pexels.com/photos/16129724/pexels-photo-16129724/free-photo-of-man-working-on-computers-coding.jpeg",
    ],
    description: "Sample description for post 8",
    likes: 42,
    comments: 5,
    shares: 12,
    isLiked: true,
    isBookmarked: false,
    commentsData: [
      {
        id: 1,
        postId: 8,
        author: {
          id: 24,
          name: "Emily Baker",
          avatar: "https://randomuser.me/api/portraits/women/24.jpg",
        },
        content: "I love the concept, will try this soon.",
        createdAt: new Date(),
        likes: 9,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 2,
        postId: 8,
        author: {
          id: 25,
          name: "James Wilson",
          avatar: "https://randomuser.me/api/portraits/men/25.jpg",
        },
        content: "This helped me solve a major issue I was facing.",
        createdAt: new Date(),
        likes: 6,
        isLiked: true,
        replyCount: 1,
      },
      {
        id: 3,
        postId: 8,
        author: {
          id: 26,
          name: "Anna Miller",
          avatar: "https://randomuser.me/api/portraits/women/26.jpg",
        },
        content: "Thanks for the tip, I needed this right now.",
        createdAt: new Date(),
        likes: 5,
        isLiked: false,
        replyCount: 0,
      },
      {
        id: 4,
        postId: 8,
        author: {
          id: 27,
          name: "David Clark",
          avatar: "https://randomuser.me/api/portraits/men/27.jpg",
        },
        content: "This technique changed my workflow for the better.",
        createdAt: new Date(),
        likes: 7,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 5,
        postId: 8,
        author: {
          id: 28,
          name: "Chloe Harris",
          avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        },
        content: "Amazing! I will be sharing this with my team.",
        createdAt: new Date(),
        likes: 8,
        isLiked: true,
        replyCount: 1,
      },
    ],
  },
  {
    id: 9,
    image: [
      "https://images.pexels.com/photos/18935831/pexels-photo-18935831/free-photo-of-programmer-working-at-desk.jpeg",
    ],
    description: "Sample description for post 9",
    likes: 27,
    comments: 2,
    shares: 6,
    isLiked: false,
    isBookmarked: false,
    commentsData: [
      {
        id: 1,
        postId: 9,
        author: {
          id: 29,
          name: "Jack Moore",
          avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        },
        content: "Great tips here. Can't wait to try it out.",
        createdAt: new Date(),
        likes: 3,
        isLiked: true,
        replyCount: 1,
      },
      {
        id: 2,
        postId: 9,
        author: {
          id: 30,
          name: "Olivia Garcia",
          avatar: "https://randomuser.me/api/portraits/women/30.jpg",
        },
        content:
          "I can already see how useful this will be for my next project.",
        createdAt: new Date(),
        likes: 5,
        isLiked: false,
        replyCount: 0,
      },
    ],
  },
  {
    id: 10,
    image: [
      "https://images.pexels.com/photos/1181312/pexels-photo-1181312.jpeg",
    ],
    description: "Sample description for post 10",
    likes: 33,
    comments: 3,
    shares: 10,
    isLiked: true,
    isBookmarked: true,
    commentsData: [
      {
        id: 1,
        postId: 10,
        author: {
          id: 31,
          name: "Benjamin King",
          avatar: "https://randomuser.me/api/portraits/men/31.jpg",
        },
        content: "This is going to improve my daily routine significantly.",
        createdAt: new Date(),
        likes: 8,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 2,
        postId: 10,
        author: {
          id: 32,
          name: "Grace Lewis",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        },
        content: "I love how this is explained, definitely implementing this.",
        createdAt: new Date(),
        likes: 6,
        isLiked: false,
        replyCount: 0,
      },
      {
        id: 3,
        postId: 10,
        author: {
          id: 33,
          name: "Ella Young",
          avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        },
        content: "Such a simple yet effective method. Thanks for sharing!",
        createdAt: new Date(),
        likes: 5,
        isLiked: true,
        replyCount: 1,
      },
    ],
  },
  {
    id: 11,
    image: [
      "https://images.pexels.com/photos/1181312/pexels-photo-1181312.jpeg",
    ],
    description: "Sample description for post 11",
    likes: 50,
    comments: 5,
    shares: 15,
    isLiked: true,
    isBookmarked: false,
    commentsData: [
      {
        id: 1,
        postId: 11,
        author: {
          id: 34,
          name: "Mason Lee",
          avatar: "https://randomuser.me/api/portraits/men/34.jpg",
        },
        content: "This really helped me with my current task. Thanks!",
        createdAt: new Date(),
        likes: 10,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 2,
        postId: 11,
        author: {
          id: 35,
          name: "Zoe Brown",
          avatar: "https://randomuser.me/api/portraits/women/35.jpg",
        },
        content: "Excellent post! This should be shared more.",
        createdAt: new Date(),
        likes: 7,
        isLiked: false,
        replyCount: 1,
      },
      {
        id: 3,
        postId: 11,
        author: {
          id: 36,
          name: "Liam Davis",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        content: "I'm going to use this in my next project. Fantastic post.",
        createdAt: new Date(),
        likes: 6,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 4,
        postId: 11,
        author: {
          id: 37,
          name: "Isabella Clark",
          avatar: "https://randomuser.me/api/portraits/women/37.jpg",
        },
        content: "Love the approach here, definitely going to try this.",
        createdAt: new Date(),
        likes: 5,
        isLiked: false,
        replyCount: 0,
      },
      {
        id: 5,
        postId: 11,
        author: {
          id: 38,
          name: "Wyatt Walker",
          avatar: "https://randomuser.me/api/portraits/men/38.jpg",
        },
        content:
          "Very informative post, it changed the way I approach problems.",
        createdAt: new Date(),
        likes: 9,
        isLiked: true,
        replyCount: 1,
      },
    ],
  },
  {
    id: 12,
    image: [
      "https://images.pexels.com/photos/18935831/pexels-photo-18935831/free-photo-of-programmer-working-at-desk.jpeg",
    ],
    description: "Sample description for post 12",
    likes: 42,
    comments: 4,
    shares: 8,
    isLiked: true,
    isBookmarked: true,
    commentsData: [
      {
        id: 1,
        postId: 12,
        author: {
          id: 39,
          name: "Amelia Green",
          avatar: "https://randomuser.me/api/portraits/women/39.jpg",
        },
        content:
          "This will definitely help me with my current project. Thank you!",
        createdAt: new Date(),
        likes: 9,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 2,
        postId: 12,
        author: {
          id: 40,
          name: "Ethan Moore",
          avatar: "https://randomuser.me/api/portraits/men/40.jpg",
        },
        content:
          "Great advice here, I'll be implementing this in my daily routine.",
        createdAt: new Date(),
        likes: 8,
        isLiked: false,
        replyCount: 1,
      },
      {
        id: 3,
        postId: 12,
        author: {
          id: 41,
          name: "Charlotte King",
          avatar: "https://randomuser.me/api/portraits/women/41.jpg",
        },
        content: "Really insightful post. Will share this with my team.",
        createdAt: new Date(),
        likes: 7,
        isLiked: true,
        replyCount: 0,
      },
      {
        id: 4,
        postId: 12,
        author: {
          id: 42,
          name: "Wyatt White",
          avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        },
        content: "This is exactly what I needed to see today. Amazing!",
        createdAt: new Date(),
        likes: 10,
        isLiked: true,
        replyCount: 1,
      },
    ],
  },
];
