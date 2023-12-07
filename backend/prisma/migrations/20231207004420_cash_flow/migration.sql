-- CreateTable
CREATE TABLE "media_cash_flow" (
    "id_media_cash_flow" TEXT NOT NULL,
    "id_media" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "reference_date" TIMESTAMP(3) NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_cash_flow_pkey" PRIMARY KEY ("id_media_cash_flow")
);

-- AddForeignKey
ALTER TABLE "media_cash_flow" ADD CONSTRAINT "media_cash_flow_id_media_fkey" FOREIGN KEY ("id_media") REFERENCES "media"("id_media") ON DELETE RESTRICT ON UPDATE CASCADE;
