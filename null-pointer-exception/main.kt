data class Article(var author: Author?);

data class Author(var name: String);

fun getArticle() : Article? {
    return null;
}

fun main() {
    val article = getArticle();
    println(article?.author?.name)
}