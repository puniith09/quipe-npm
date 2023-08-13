use near_sdk::collections::Map;
use near_sdk::env;
use near_sdk::AccountId;
use crate::model::UserSession;

pub struct Session {
    sessions: Map<AccountId, UserSession>,
}

impl Session {
    pub fn new() -> Self {
        Self {
            sessions: Map::new(b"sessions".to_vec()),
        }
    }

    pub fn create_session(&mut self, account_id: AccountId) -> bool {
        if self.sessions.contains_key(&account_id) {
            return false;
        }

        let user_session = UserSession {
            account_id: account_id.clone(),
            login_timestamp: env::block_timestamp(),
        };

        self.sessions.insert(&account_id, &user_session);
        true
    }

    pub fn remove_session(&mut self, account_id: AccountId) -> bool {
        if !self.sessions.contains_key(&account_id) {
            return false;
        }

        self.sessions.remove(&account_id);
        true
    }
}