CREATE TABLE `events` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titleFr` varchar(255) NOT NULL,
	`titleIt` varchar(255) NOT NULL,
	`descriptionFr` text,
	`descriptionIt` text,
	`eventDate` date NOT NULL,
	`eventTime` time,
	`location` varchar(255) NOT NULL,
	`category` varchar(50),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `events_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `galleryItems` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titleFr` varchar(255) NOT NULL,
	`titleIt` varchar(255) NOT NULL,
	`descriptionFr` text,
	`descriptionIt` text,
	`imageUrl` text NOT NULL,
	`category` varchar(50),
	`displayOrder` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `galleryItems_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `memberships` (
	`id` int AUTO_INCREMENT NOT NULL,
	`civility` varchar(10) NOT NULL,
	`firstName` varchar(100) NOT NULL,
	`lastName` varchar(100) NOT NULL,
	`address` text NOT NULL,
	`phone` varchar(20),
	`email` varchar(320) NOT NULL,
	`italianOrigin` boolean DEFAULT false,
	`status` enum('pending','approved','rejected') DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `memberships_id` PRIMARY KEY(`id`)
);
