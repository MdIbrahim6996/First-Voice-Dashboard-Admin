-- CreateTable
CREATE TABLE `old_users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `employee_id` VARCHAR(191) NULL,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(100) NULL,
    `email_verified_at` TIMESTAMP(0) NULL,
    `email_otp` VARCHAR(10) NULL,
    `designation` VARCHAR(150) NULL,
    `gender` VARCHAR(20) NULL,
    `address` VARCHAR(300) NULL,
    `city` VARCHAR(100) NULL,
    `state` VARCHAR(100) NULL,
    `pin` VARCHAR(20) NULL,
    `pan` VARCHAR(20) NULL,
    `pic` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(30) NOT NULL DEFAULT 'Superadmin',
    `phone` VARCHAR(20) NULL,
    `join_at` DATE NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `remember_token` VARCHAR(100) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `users_email_index`(`email`),
    INDEX `users_phone_index`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
