## Acount

Get Token/Signup, Login, Logout - Get, Post, Delete

Input-

"account": {
"id": "string",
"username": "string",
"full_name": "string",
}

Output

{
"access_token": "string",
"token_type": "Bearer",
"account": {
"id": "string",
"username": "string",
"full_name": "string",
"hashed_password": "string"
}
}

## Recommendations

Post recommendation - ChatGpt API call

Input -

{
"location": "string",
"interest": "string"
}

Output -

{
"recommendations": [
"string"
]
}

Get/List Recommendations

Output -

[
{
"location": "string",
"interest": "string",
"recommendations": "string",
"id": "string"
}
]

Post/Save Recommendations

Input -

{
"location": "string",
"interest": "string",
"recommendations": "string"
}

Output -

{
"location": "string",
"interest": "string",
"recommendations": "string",
"id": "string"
}

Get Recommendation Details

recommendations : [
{
"id: "string"
}
]

Output -

{
"location": "string",
"interest": "string",
"recommendations": "string",
"id": "string"
}

Delete Recommendation

Input -

recommendations : [
{
"id: "string"
}
]

Output -

{
"success": bool
}
