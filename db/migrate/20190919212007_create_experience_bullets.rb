class CreateExperienceBullets < ActiveRecord::Migration[5.2]
  def change
    create_table :experience_bullets do |t|
      t.integer :experience_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :experience_bullets, :experience_id
    add_index :experience_bullets, :bullet_id
  end
end
