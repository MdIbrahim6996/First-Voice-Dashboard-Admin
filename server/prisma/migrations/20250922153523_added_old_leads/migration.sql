-- CreateTable
CREATE TABLE `old_leads` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `sale_at` DATE NULL,
    `salutation` VARCHAR(20) NULL,
    `closer_user_id` BIGINT UNSIGNED NULL,
    `fname` VARCHAR(191) NOT NULL,
    `mname` VARCHAR(191) NULL,
    `lname` VARCHAR(191) NULL,
    `address1` MEDIUMTEXT NULL,
    `city` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `pin` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `dob` DATE NULL,
    `phone` VARCHAR(191) NULL,
    `process` VARCHAR(191) NULL,
    `plan` VARCHAR(191) NULL,
    `fee` VARCHAR(191) NULL,
    `currency` VARCHAR(191) NULL,
    `bank_name` VARCHAR(191) NULL,
    `account_name` VARCHAR(191) NULL,
    `account_no` VARCHAR(191) NULL,
    `sort_code` VARCHAR(191) NULL,
    `card_no` VARCHAR(191) NULL,
    `card_type` VARCHAR(191) NULL,
    `expiry_month` INTEGER NULL,
    `expiry_year` INTEGER NULL,
    `card_cvv` VARCHAR(10) NULL,
    `comments` TEXT NULL,
    `centre` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `leads_closer_user_id_foreign`(`closer_user_id`),
    INDEX `leads_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `old_leads` ADD CONSTRAINT `leads_closer_user_id_foreign` FOREIGN KEY (`closer_user_id`) REFERENCES `old_users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `old_leads` ADD CONSTRAINT `leads_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `old_users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
