```rust
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, near_bindgen, AccountId};
use crate::session::{create_session, remove_session};
use crate::model::UserSession;

near_sdk::setup_alloc!();

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct SessionManagement {
    sessions: std::collections::HashMap<AccountId, UserSession>,
}

impl Default for SessionManagement {
    fn default() -> Self {
        Self {
            sessions: std::collections::HashMap::new(),
        }
    }
}

#[near_bindgen]
impl SessionManagement {
    pub fn login(&mut self, username: AccountId) -> bool {
        if self.sessions.contains_key(&username) {
            return false;
        }
        let session = create_session(username.clone());
        self.sessions.insert(username, session);
        true
    }

    pub fn logout(&mut self, username: AccountId) -> bool {
        if !self.sessions.contains_key(&username) {
            return false;
        }
        remove_session(&mut self.sessions, &username);
        true
    }
}
```