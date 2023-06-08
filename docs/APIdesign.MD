## Account

-Method: Get, Post, Delete
-Path: '/api/accounts

Input-

```json
{
"account": {
"id": "string",
"username": "string",
"full_name": "string",
}
}
```
Output

```json
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
```

## Recommendations

Post recommendation - ChatGpt API call

Input -
```json
{
"location": "string",
"interest": "string"
}
```
Output -
```json
{
"recommendations": [
"string"
]
}
```
Get/List Recommendations

Output -
```json
[
{
"location": "string",
"interest": "string",
"recommendations": "string",
"id": "string"
}
]
```
Post/Save Recommendations

Input -
```json
{
"location": "string",
"interest": "string",
"recommendations": "string"
}
```
Output -
```json
{
"location": "string",
"interest": "string",
"recommendations": "string",
"id": "string"
}
```
Get Recommendation Details
```json
recommendations : [
{
"id: "string"
}
]
```
Output -
```json
{
"location": "string",
"interest": "string",
"recommendations": "string",
"id": "string"
}
```
Delete Recommendation

Input -
```json
recommendations : [
{
"id: "string"
}
]
```
Output -
```json
{
"success": bool
}
```
