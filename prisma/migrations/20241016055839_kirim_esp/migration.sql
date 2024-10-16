-- CreateTable
CREATE TABLE `KirimEsp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `currentstate` INTEGER NOT NULL,
    `delay` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
