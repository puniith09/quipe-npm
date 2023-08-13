```rust
#[cfg(test)]
mod tests {
    use super::*;
    use near_sdk::MockedBlockchain;
    use near_sdk::{testing_env, VMContext};

    fn get_context(input: Vec<u8>, is_view: bool) -> VMContext {
        VMContext {
            current_account_id: "test.near".to_string(),
            signer_account_id: "test.near".to_string(),
            signer_account_pk: vec![0, 1, 2],
            predecessor_account_id: "test.near".to_string(),
            input,
            block_index: 0,
            block_timestamp: 0,
            account_balance: 0,
            account_locked_balance: 0,
            storage_usage: 0,
            attached_deposit: 0,
            prepaid_gas: 10u64.pow(18),
            random_seed: vec![0, 1, 2],
            is_view,
            output_data_receivers: vec![],
            epoch_height: 0,
        }
    }

    #[test]
    fn test_login() {
        let context = get_context(vec![], false);
        testing_env!(context);
        let mut contract = session_management::new();
        assert_eq!(contract.login("test_user".to_string()), true);
    }

    #[test]
    fn test_logout() {
        let context = get_context(vec![], false);
        testing_env!(context);
        let mut contract = session_management::new();
        contract.login("test_user".to_string());
        assert_eq!(contract.logout("test_user".to_string()), true);
    }
}
```