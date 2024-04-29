FROM inf2023dw2g25/healthapi:healthapi-mysql

# Set the environment variables
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=healthapi

# Copy the database file into the container at /docker-entrypoint-initdb.d/
COPY ./db/init.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306