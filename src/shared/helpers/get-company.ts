import prisma from "@/shared/lib/prisma";

export const getCompany = async () => {
  const companies = await prisma.company.findMany({
    // include: {
    //   projects: true,
    //   technologies: true,
    // },

    include: {
      technologies: true,
        projects: {
        include: {
          technologies: true,
        },
      },
    }

  });

  console.log(companies);
  return companies;
};