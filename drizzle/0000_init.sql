CREATE TABLE "cart_items" (
	"id" text PRIMARY KEY NOT NULL,
	"cart_id" text NOT NULL,
	FOREIGN KEY ("cart_id") REFERENCES "carts" ("id")
);

CREATE TABLE "carts" (
	"id" text PRIMARY KEY NOT NULL,
	"status" text NOT NULL DEFAULT 'open',
	"expires_at" timestamp with time zone NOT NULL DEFAULT now(),
	"created_at" timestamp with time zone NOT NULL DEFAULT now(),
	"updated_at" timestamp with time zone NOT NULL DEFAULT now()
);

CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL UNIQUE,
	"password_hash" text NOT NULL,
	"role" text NOT NULL DEFAULT 'customer',
	"phone" text,
	"created_at" timestamp with time zone NOT NULL DEFAULT now(),
	"updated_at" timestamp with time zone NOT NULL DEFAULT now()
);

CREATE TABLE "products" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"price_cents" integer NOT NULL DEFAULT 0,
	"image_url" text,
	"is_available" boolean NOT NULL DEFAULT true,
	"created_at" timestamp with time zone NOT NULL DEFAULT now(),
	"updated_at" timestamp with time zone NOT NULL DEFAULT now()
);

CREATE TABLE "orders" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"status" text NOT NULL DEFAULT 'pending',
	"total_cents" integer NOT NULL DEFAULT 0,
	"delivery_address" text,
	"promo_code" text,
	"created_at" timestamp with time zone NOT NULL DEFAULT now(),
	"updated_at" timestamp with time zone NOT NULL DEFAULT now()
);

CREATE TABLE "order_items" (
	"id" text PRIMARY KEY NOT NULL,
	"order_id" text NOT NULL,
	"product_id" text NOT NULL,
	"quantity" integer NOT NULL DEFAULT 1,
	"price_cents" integer NOT NULL DEFAULT 0,
	FOREIGN KEY ("order_id") REFERENCES "orders" ("id")
);

CREATE INDEX "order_items_order_id_idx" ON "order_items" ("order_id");

CREATE INDEX "order_items_product_id_idx" ON "order_items" ("product_id");

CREATE TABLE "promos" (
	"id" text PRIMARY KEY NOT NULL,
	"code" text NOT NULL UNIQUE,
	"discount_cents" integer NOT NULL DEFAULT 0,
	"expires_at" timestamp with time zone,
	"created_at" timestamp with time zone NOT NULL DEFAULT now(),
	"updated_at" timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX "promos_code_idx" ON "promos" ("code");
