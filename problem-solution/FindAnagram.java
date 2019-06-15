/**
 * Given a string, check if the string has all characters from a to z or A to Z
 */
public class FindAnagram {
    public static void main(String[] args) {
        boolean hasAll = FindAnagram.checkAnagram("qwertyuioplkjhgfdsazxcvbnm");
        boolean dontHaveAll = FindAnagram.checkAnagram("kjsad asdhk asdkj asdlj asdlkj");
        System.out.println("Should print true: " + hasAll);
        System.out.println("Should print false: " + dontHaveAll);
    }

    public static boolean checkAnagram(String str) {
        boolean[] chars = new boolean[26];
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
                int index = str.charAt(i) - 'a';
                chars[index] = true;
            } else if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
                int index = str.charAt(i) - 'A';
                chars[index] = true;
            }
        }
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] == false) {
                return false;
            }
        }
        return true;
    }

}