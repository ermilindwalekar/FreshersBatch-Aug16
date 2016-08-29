import java.util.Arrays;
import java.util.List;

import org.bson.Document;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class Connect
{
 public static void main(String[] args)
 {
  MongoClient mongoClient = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
  
  MongoDatabase database = mongoClient.getDatabase("Test");
  List books = Arrays.asList(1251,2512);
  Document person = new Document("_id", "Milind")
                              .append("name", "Java-Mongo")
                              .append("address", new BasicDBObject("street", "sad java")
                                                           .append("city", "mongos")
                                                           .append("state", "mongod")
                                                           .append("zip", 5151))
                              .append("books", books);
  
  MongoCollection collection= database.getCollection("people");
  collection.insertOne(person);
  mongoClient.close();
 }
}