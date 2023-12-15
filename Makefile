NETWORK_NAME = hospedaeventos

network:
	docker network create $(NETWORK_NAME)

init:
	npm install
	docker compose build
	docker compose up -d
	docker compose exec nestjs bash

end:
	docker compose down

psql:
	docker compose exec postgres psql -U root -d hospedaeventos

bcrypt-update-bin:
	 npm rebuild bcrypt --update-binary
