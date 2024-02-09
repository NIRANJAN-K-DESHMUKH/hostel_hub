import java.util.HashMap;
import java.util.Map;

public class DuplicateStrings {
    public static void main(String[] args) {
        String[] strings = { "apple", "banana", "orange", "apple", "grape", "banana" };

        Map<String, Integer> stringCount = new HashMap<>();

        // Count the occurrences of each string
        for (String str : strings) {
            if (stringCount.containsKey(str)) {
                stringCount.put(str, stringCount.get(str) + 1);
            } else {
                stringCount.put(str, 1);
            }
        }

        // Print the duplicate strings
        for (Map.Entry<String, Integer> entry : stringCount.entrySet()) {
            if (entry.getValue() > 1) {
                System.out.println("Duplicate string: " + entry.getKey());
            }
        }
    }
}
