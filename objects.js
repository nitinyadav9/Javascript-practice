// factory function

function createCourse(title){
    return {
        title: title,
        enroll(){
            console.log(('you r succesfully enrolled'));
        }
    }
}

const course = createCourse('javascript');
course.enroll()


