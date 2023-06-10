Information for using/testing (with POSTMAN):

<!-- For register user: -->

http://localhost:8801/api/auth/register - POST

Body - raw(JSON):
{
"username":"Jane",
"email":"Jane@mail.com",
"password":"12345"
}

<!-- For login -->

http://localhost:8801/api/auth/login -POST

Body - raw(JSON):
{
"email":"Bobi@mail.com1",
"password":"12345"
}

<!-- For getting user account -->

http://localhost:8801/api/users/6470f102e5c869ea897805ef - GET

<!-- For updating account -->

http://localhost:8801/api/users/6470f102e5c869ea897805ef - PUT

Body - raw(JSON):
{
"desc":"its my updating description",
"userId":"6470f102e5c869ea897805ef"
}

<!-- For deleting user account -->

http://localhost:8801/api/users/6470cb9956911fc94b5ea6ac - DELETE

Body - raw(JSON):
{
"userId":"6470cb9956911fc94b5ea6ac"
}

<!-- Follow user -->

http://localhost:8801/api/users/6470f102e5c869ea897805ef/follow - PUT

Body - raw(JSON):
{
"userId":"6470f0e9e5c869ea897805ed"
}

<!-- UNfollow user -->

http://localhost:8801/api/users/6470f102e5c869ea897805ef/unfollow - PUT

Body - raw(JSON):
{
"userId":"6470f0e9e5c869ea897805ed"
}

<!-- To create a post -->

http://localhost:8801/api/posts - POST

Body - raw(JSON):
{
"userId":"6470f102e5c869ea897805ef",
"desc":"Hey its my new post"
}

<!-- To update a post -->

http://localhost:8801/api/posts/6470f790114dcf93a694896b - PUT

Body - raw(JSON):
{
"userId":"6470f0e9e5c869ea897805ed",
"desc":"Hey its updated post"
}

<!-- Delete a post -->

http://localhost:8801/api/posts/6470f790114dcf93a694896b - DELETE

<!-- Read post -->

http://localhost:8801/api/posts/6470fedc77d84a588afee073 -GET

Body - raw(JSON):
{
"userId":"6470f0e9e5c869ea897805ed"
}

<!-- Like-dislake post -->

http://localhost:8801/api/posts/6470fedc77d84a588afee073/like - PUT

Body - raw(JSON):
{
"userId":"6470f0e9e5c869ea897805ed",
"desc":"Hey its my new post"
}

<!-- Read all posts -->

http://localhost:8801/api/posts/timeline/:userId - GET

Body - raw(JSON):
{
"userId":"6470f0e9e5c869ea897805ed"
}
