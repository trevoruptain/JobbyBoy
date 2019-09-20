class CreateResumes < ActiveRecord::Migration[5.2]
  def change
    create_table :resumes do |t|
      t.string :title, null: false
      t.string :primary_color, null: false
      t.string :secondary_color, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :resumes, :title
  end
end
