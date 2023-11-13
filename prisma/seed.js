const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        title: "Dinner Table",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://picsum.photos/id/42",
        price: 8999,
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });

    await prisma.products.create({
      data: {
        name: "Pet Bed",
        src: "/dog.jpg",
        price: 2999, // Price in cents (2999 cents = $29.99)
        description: "Cozy pet bed for your furry friend's comfort.",
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
