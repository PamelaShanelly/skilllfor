# Security Specification for SkillFor Platform

## Data Invariants
1. A User document must have an ID that matches its document ID.
2. A RegisteredCourse must belong to a valid course ID present in the global constants.
3. The `role` field in a User document is immutable for the user and can only be set by an admin (or during safe registration if properly guarded).
4. Timestamp fields (`lastLogin`, `timestamp`, `startDate`) must be validated against `request.time`.

## The "Dirty Dozen" Payloads (Red Team Test Cases)
1. **Identity Spoofing**: Attempt to create a user profile with a different `uid` than the authenticated user.
2. **Privilege Escalation**: A student attempting to update their `role` to 'admin'.
3. **Ghost Field Mutation**: Adding unauthorized fields to a user profile (e.g., `isVerified: true`).
4. **ID Poisoning**: Creating a message with a 2KB garbage string as the ID.
5. **Unauthorized Message Read**: A non-admin user trying to list all messages in the `/messages` collection.
6. **Relational Sync Bypass**: Enrolling in a course that doesn't exist.
7. **PII Leak**: A user trying to 'get' another user's private address or email.
8. **Audit Log Erasure**: A user attempting to delete an audit log.
9. **Fake Progress**: A user attempting to set their course progress to 100% without completing modules. (Note: difficult to enforce without server-side logic, but we can enforce type/size).
10. **Timestamp Fraud**: Providing a fake `lastLogin` date in the past or future.
11. **Blanket Read Attack**: Attempting to query the entire `/users` collection without a specific filter.
12. **Admin Spoofing**: Creating a document in `/admins` collection as a non-admin.

## The Test Runner (Mock Tests)
See `firestore.rules.test.ts` for implementation details.
