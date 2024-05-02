// en: 
// The Western Suburbs Croquet has two categories of membership. Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club. handicaps range from -2  to +26: the better the player the lower the handicap.

// Input 

// Input will consist of a list of lists containig two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Note for F#: The input will be of (int list list) which is a List<List>.

// Example Input

// [[18,20],[45,2], [61,12], [37,6], [21,21],[79,79]]

// Output 

// Output will consist of a list of string values( in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example Output
// ["Open","Open", "Senior", "Open", "Open", "Senior"]

// ---------------------------------------------***********------------------------------------------------------------
// vi:

// Western Suburbs Croquet có hai loại thành viên. Cao cấp và cởi mở. Họ muốn bạn giúp đỡ về một mẫu đơn đăng ký sẽ cho các thành viên tiềm năng biết họ sẽ được xếp loại nào.
// Để trở thành người cao tuổi, thành viên phải ít nhất 55 tuổi và có handicap lớn hơn 7. Trong câu lạc bộ bóng vồ này. Điểm chấp dao động từ -2 đến +26: người chơi càng giỏi thì điểm chấp càng thấp.

// Đầu vào

// Đầu vào sẽ bao gồm một danh sách các danh sách, mỗi danh sách chứa hai mục. Mỗi danh sách chứa thông tin về một thành viên tiềm năng. Thông tin của một số nguyên bao gồm tuổi của một người và một số nguyên cho handicap của người đó.
// Lưu ý đối với F#: Đầu vào sẽ là (int list list) là List<List>.

// Ví dụ đầu vào

// [[18,20],[45,2], [61,12], [37,6], [21,21],[79,79]]

// Đầu ra

// Đầu ra sẽ bao gồm một danh sách các giá trị chuỗi (trong Haskell: Open hoặc Senior) cho biết liệu thành viên tương ứng có được xếp vào danh mục mở hoặc cấp cao hay không.

// Ví dụ đầu ra
// ["Mở", "Mở", "Cao cấp", "Mở", "Mở", "Cao cấp"]


// start