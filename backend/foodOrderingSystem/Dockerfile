# Step 1: Use Java 25 to build the application
FROM eclipse-temurin:25-jdk-jammy AS build
WORKDIR /app

# Copy project files and build
COPY . .
RUN chmod +x ./mvnw
RUN ./mvnw clean package -DskipTests

# Step 2: Use lightweight Java 25 runtime
FROM eclipse-temurin:25-jre-jammy
WORKDIR /app

# Copy the built jar
COPY --from=build /app/target/*.jar app.jar

# Render assigns port dynamically via the PORT environment variable
EXPOSE 9292 10000

# Start the application
ENTRYPOINT ["java", "-jar", "app.jar"]