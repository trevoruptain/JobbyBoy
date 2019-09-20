class CreateProjectBullets < ActiveRecord::Migration[5.2]
  def change
    create_table :project_bullets do |t|
      t.integer :project_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :project_bullets, :project_id
    add_index :project_bullets, :bullet_id
  end
end
