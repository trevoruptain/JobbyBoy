class CreateResumeProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :resume_projects do |t|
      t.integer :resume_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end

    add_index :resume_projects, :resume_id
    add_index :resume_projects, :project_id
  end
end
