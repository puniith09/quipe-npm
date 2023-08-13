```rust
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct UserSession {
    pub username: String,
    pub session_id: String,
}
```