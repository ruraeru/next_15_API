-- AlterTable
ALTER TABLE `comments` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` MODIFY `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);