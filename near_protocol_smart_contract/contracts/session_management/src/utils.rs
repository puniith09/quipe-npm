use near_sdk::serde::{Deserialize, Serialize};
use crate::model::UserSession;

pub fn serialize_session(session: &UserSession) -> String {
    serde_json::to_string(session).unwrap()
}

pub fn deserialize_session(session_str: &str) -> UserSession {
    serde_json::from_str(session_str).unwrap()
}