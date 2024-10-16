/*
  Warnings:

  - You are about to drop the `collection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `collection`;

-- CreateTable
CREATE TABLE `DataCollection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bpm` DOUBLE NOT NULL,
    `spo` DOUBLE NOT NULL,
    `suhu` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
