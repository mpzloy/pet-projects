import {PrismaClient, Prisma} from "../generated/prisma/client";
import {PrismaPg} from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const prismaCreateTechnology = async () => {
  const technologyData: string[] = [
    "Astro",
    "Shopify",
    "Liquid",
    "CSS",
    "SCSS",
    "JavaScript",
    "Gulp",
    "React",
    "Next.js",
  ];

  for (const name of technologyData) {
    await prisma.technology.upsert({ // Check if the technology already exists, if not create it
      where: {
        name,
      },
      update: {},
      create: {
        name,
      },
    });
  }
}

const prismaCreateCompany = async () => {
  const companyData: Prisma.CompanyCreateInput[] = [
    {
      name: "Avant Ops",
      position: "Front-End Engineer",
      startAt: new Date("2024-06-01"),
      description: `Займав посаду Senior Front-End Engineer на проектах з використанням Shopify, React, Nect.js та Astro. Відповідальний за розробку та підтримку веб-додатків, оптимізацію продуктивності.`,
      technologies: {
        connect: [
          {name: "Shopify"},
          {name: "Astro"},
          {name: "CSS"},
          {name: "SCSS"},
          {name: "JavaScript"},
          {name: "Gulp"},
          {name: "React"},
          {name: "Next.js"},
        ]
      },
      projects: {
        create: [
          {
            name: "tmg",
            image: "/projects-image/tmg.webp",
            technologies: {
              connect: {name: "Shopify"}
            },
            description: `
### Розробка інтернет-магазину з можжливістю створювати події та продажу костюмів на Shopify. Створення кастоних опцій та блоків для адмін-панелі.

Розробка кастомного особистого кабінету з можлівістю керування подіями (весілля, прийоми, корпоративи), запрошувати гостей, обирати для них костюми та признасати ролі. Гуртова оплата та знижки для гостей.

Розробка "кастомізатора" костюмів з можливістю обирати кольори, тканини, фасон, краватку/метелик та інші параметри.

Розробка "візарда" для створення подій з можливістю обирати дату, час, тип події, кількість гостей та інші параметри.
`
          },
          {
            name: "avantops",
            image: "/projects-image/avantops.webp",
            technologies: {
              connect: {name: "Astro"}
            },
            description: `
### Розробка landing-page компанії на Astro.

Створення додатку за власним дизайном, з додаванням анімацій та інтерактивних елементів. Розміщення на Netlify та інтеграція з Netlify Form.
`
          },
          {
            name: "cofelink",
            image: "/projects-image/cofelink.webp",
            technologies: {
              connect: {name: "React"}
            },
            description: `
### Приймав участь у створенні web-додатку на React/Next.js.

Переробка/оптимізація існуючого коду, додавання нових компонентів та інтеграція з API.
`
          }
        ]
      }
    }
  ];

  for (const company of companyData) {
    await prisma.company.create({data: company});
  }
}

export async function main() {
  await prisma.project.deleteMany();
  await prisma.company.deleteMany();
  await prisma.technology.deleteMany();

  await prismaCreateTechnology();
  await prismaCreateCompany();
}

main();