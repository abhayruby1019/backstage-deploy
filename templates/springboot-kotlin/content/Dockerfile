FROM openjdk:17
ARG JAR_FILE=build/libs/*-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
EXPOSE ${{ values.serverPort }}
ENTRYPOINT ["java","-jar","/app.jar"]