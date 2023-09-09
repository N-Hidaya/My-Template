---
title: 'Transforming Figma Design into a Functional Flutter Application: Challenges and Lessons Learned'
date: '2023-09-09'
---

In my latest project, I embarked on an exciting journey of transforming a Figma design into a fully functional application using Flutter. This endeavor presented me with an array of challenges and valuable learning experiences. One of the most intriguing tasks involved creating a filtering function based on the Figma design, which pushed my programming skills to the limit. In this blog post, I'll share my experiences and insights into both the frontend and backend aspects of this project.

## Frontend Challenges
The Figma design I worked with incorporated several intricate Flutter features, including showModalBottom, chips, rangeslider, expanded, and various other cutting-edge elements. Navigating through these design intricacies proved to be quite challenging. However, the difficulties I encountered ultimately became invaluable learning opportunities.

## Backend Exploration
While I had heard of Firebase before, I had never delved into coding with it. This project required me to explore the backend realm, specifically Firebase, in order to implement the filtering function. My initial foray into Firebase was met with some roadblocks, especially when dealing with multi-filtering requirements.

- **Overcoming Complex Query Limitations:**
Firebase presented its own set of challenges, primarily due to its limitations on queries. My filtering function required a significant number of queries, resulting in a complex query structure. I learned that Firebase restricts the use of multiple whereIn conditions in a single query. Additionally, the arrayContainsAny function in Firebase is limited to array fields; when applied to string fields, it returns an empty array.

To tackle this issue, I had to make substantial changes to my code, introducing new array fields and variables to enable the use of arrayContainsAny in my query. After much trial and error, I successfully achieved the desired outcome!

I've uploaded a video in Instagram to show a glimpse of the process:
📸 [Checkout AI Daya's Programming Reel in Instagram](https://www.instagram.com/reel/Cw-QglhxIw_/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==)

## The Importance of Patience and Work-Life Balance
Throughout this project, I discovered that patience is an indispensable virtue for any programmer. Complex challenges and intricate coding tasks can be frustrating, but maintaining composure and perseverance is key to overcoming them.

In the end, this project not only honed my technical skills but also taught me the value of work-life balance. I made it a priority to end my work at 6 PM and ensure adequate rest. It's crucial to remember that, as programmers, our health is paramount. While we may be deeply engrossed in our work, maintaining a healthy work-life balance should always be a top priority.

By sharing my experiences and lessons learned, I hope to inspire fellow developers to embrace challenges, keep learning, and prioritize their well-being in the ever-evolving world of programming!

Cheers,
AI Daya