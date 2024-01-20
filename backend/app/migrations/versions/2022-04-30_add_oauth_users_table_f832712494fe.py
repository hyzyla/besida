"""Add oauth_users table

Revision ID: f832712494fe
Revises: efc0e1345e3a
Create Date: 2022-04-30 21:24:38.138217

"""
import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = "f832712494fe"
down_revision = "efc0e1345e3a"
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "oauth_users",
        sa.Column("id", sa.BigInteger(), sa.Identity(always=False), nullable=False),
        sa.Column("sub", sa.Text(), nullable=False),
        sa.Column("extra", postgresql.JSONB(astext_type=sa.Text()), nullable=False),
        sa.Column(
            "provider",
            sa.Enum("google", name="oauthprovider", native_enum=False, length=100),
            nullable=False,
        ),
        sa.Column("user_id", sa.BigInteger(), nullable=False),
        sa.ForeignKeyConstraint(
            ("user_id",),
            ["users.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("sub", "oauth_users", ["provider"], unique=True)


def downgrade():
    op.drop_index("sub", table_name="oauth_users")
    op.drop_table("oauth_users")
